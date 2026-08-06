import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "J-Bengtson";

  try {
    const headers = { "User-Agent": "dev-portfolio-app" };

    // 1. Perfil do GitHub
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 300 },
    });

    if (!userRes.ok) {
      return NextResponse.json(
        { error: "Usuário do GitHub não encontrado" },
        { status: userRes.status }
      );
    }

    const userData = await userRes.json();

    // 2. Repositórios do GitHub (até 100 mais recentes/populares)
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers, next: { revalidate: 300 } }
    );

    const reposData: any[] = reposRes.ok ? await reposRes.json() : [];

    // 3. Organizar Métricas Avançadas
    let totalStars = 0;
    let totalForks = 0;
    const languageCounts: Record<string, number> = {};
    const topicSet = new Set<string>();

    const formattedRepos = reposData.map((repo: any) => {
      totalStars += repo.stargazers_count || 0;
      totalForks += repo.forks_count || 0;

      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }

      if (Array.isArray(repo.topics)) {
        repo.topics.forEach((t: string) => topicSet.add(t));
      }

      return {
        id: repo.id,
        name: repo.name,
        description: repo.description || "Projeto desenvolvido e mantido no GitHub.",
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        language: repo.language || "Outros",
        topics: repo.topics || [],
        updatedAt: new Date(repo.updated_at).toLocaleDateString("pt-BR"),
        createdYear: new Date(repo.created_at).getFullYear().toString(),
      };
    });

    // Ordenar Top Stacks / Linguagens com porcentagem
    const totalRepoWithLang = Object.values(languageCounts).reduce((a, b) => a + b, 0) || 1;
    const topLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({
        name,
        count,
        percent: Math.round((count / totalRepoWithLang) * 100),
      }));

    // Repositórios Destaque (ordenados por estrelas / forks)
    const featuredRepos = [...formattedRepos]
      .sort((a, b) => b.stars - a.stars || b.forks - a.forks)
      .slice(0, 6);

    // Projetos para o Carrossel Dinâmico
    const carouselProjects = formattedRepos.slice(0, 8).map((r) => ({
      title: r.name,
      category: r.language,
      desc: r.description,
      tags: r.topics.length > 0 ? r.topics.slice(0, 4) : [r.language, "GitHub"],
      metric: `★ ${r.stars} | ⑂ ${r.forks}`,
      url: r.url,
    }));

    // Contribuições Open Source Dinâmicas
    const openSourceRepos = formattedRepos.slice(0, 4).map((r) => ({
      repo: `${userData.login}/${r.name}`,
      desc: r.description,
      stars: `${r.stars} stars`,
      language: r.language,
      url: r.url,
    }));

    return NextResponse.json({
      profile: {
        name: userData.name || userData.login,
        login: userData.login,
        avatar: userData.avatar_url,
        bio: userData.bio || "Engenheiro de Software & Desenvolvedor Full Stack",
        company: userData.company || "Desenvolvedor Independente",
        location: userData.location || "Brasil",
        blog: userData.blog || userData.html_url,
        email: userData.email || `${userData.login}@users.noreply.github.com`,
        twitter: userData.twitter_username,
        publicRepos: userData.public_repos,
        publicGists: userData.public_gists,
        followers: userData.followers,
        following: userData.following,
        githubUrl: userData.html_url,
        createdAtYear: new Date(userData.created_at).getFullYear().toString(),
        totalStars,
        totalForks,
      },
      topLanguages,
      topics: Array.from(topicSet).slice(0, 15),
      featuredRepos,
      carouselProjects,
      openSourceRepos,
      allRepos: formattedRepos,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Erro ao conectar com a API do GitHub" },
      { status: 500 }
    );
  }
}
