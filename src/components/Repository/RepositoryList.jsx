
const repositoryName = "teste";

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="#">
                        Acessar Repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="#">
                        Acessar Repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="#">
                        Acessar Repositório
                    </a>
                </li>
            </ul>
        </section>
    )
}