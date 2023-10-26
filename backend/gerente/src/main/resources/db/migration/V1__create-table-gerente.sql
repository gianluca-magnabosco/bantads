set search_path to gerente;

CREATE TABLE IF NOT EXISTS DadosGerente (
                                            GerenteID SERIAL PRIMARY KEY,
                                            Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    CPF VARCHAR(12) UNIQUE NOT NULL,
    Telefone VARCHAR(15)
    );