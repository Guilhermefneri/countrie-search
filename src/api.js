// URL 1: busca até 10 campos permitidos pela API
const url1 = 'https://restcountries.com/v3.1/all?fields=name,region,subregion,languages,currencies,population,cca3,flags,idd,capital';

// URL 2: busca os campos restantes que faltaram (lembrando de incluir cca3 para combinar os dados depois)
const url2 = 'https://restcountries.com/v3.1/all?fields=cca3,tld,timezones,area';

// Exporta a função async que busca e combina os dados dos países
export const fetchCountries = async () => {
  try {
    // Executa as duas requisições em paralelo e espera ambas terminarem
    const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);

    // Verifica se alguma das respostas deu erro (status HTTP fora da faixa 200)
    if (!res1.ok || !res2.ok) {
      throw new Error("Erro na busca"); // Lança um erro para ser tratado no catch
    }

    // Converte as duas respostas em JSON (listas de países)
    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

    // Cria um mapa com os dados extras (tld e timezones), indexado pelo código do país (cca3)
    const extrasMap = new Map();
    data2.forEach((country) => {
      // Para cada país na segunda resposta, salva os dados extras usando o cca3 como chave
      extrasMap.set(country.cca3, {
        tld: country.tld,
        timezones: country.timezones,
        area: country.area,
      });
    });

    // Junta os dados principais (data1) com os dados extras (do mapa) em um novo array
    const mergedData = data1.map((country) => {
      // Pega os dados extras correspondentes usando o cca3
      const extras = extrasMap.get(country.cca3) || {}; // Usa {} se não encontrar
      return {
        ...country,  // Espalha os dados principais
        ...extras,   // Adiciona os dados extras
      };
    });

    // Retorna a lista final de países combinada
    return mergedData;

  } catch (error) {
    // Caso ocorra qualquer erro, imprime no console
    console.error(error);
    // Retorna um array vazio para evitar que a aplicação quebre
    return [];
  }
};
