<template>
</template>
<script>

    import {db, auth, usersCollection, fireSQL} from "../firebase";
    
    export default {

        data() {
            return {
                pesquisas: [
                    {
                        "pesquisa_id": "0urdXiONuNYh34VtxM1pmSGEn0V2",
                        "inep_id": 17031702,
                        "ibge_id": 1718758,
                        "uf_escola": "TO",
                        "municipio": "RIO SONO",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "15hUo7akPfPbBGvggCun2bvTqkV2",
                        "inep_id": 29078440,
                        "ibge_id": 2929800,
                        "uf_escola": "BA",
                        "municipio": "SA�DE",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "2YUlhagroSXm0P2iPODJq9pWD7f1",
                        "inep_id": 29390753,
                        "ibge_id": 2932457,
                        "uf_escola": "BA",
                        "municipio": "UMBURANAS",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "394EeFFSuGOqKIRFNPZ4jPQHPdl2",
                        "inep_id": 24052345,
                        "ibge_id": 2402600,
                        "uf_escola": "RN",
                        "municipio": "CEAR�-MIRIM",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "4HUBOfAbqwbjqlGhiv1TsYWplHg1",
                        "inep_id": 21008671,
                        "ibge_id": 2107506,
                        "uf_escola": "MA",
                        "municipio": "PA�O DO LUMIAR",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "4ZIL8yRZYTQ0Sst8WnpZA26jg2R2",
                        "inep_id": 24074136,
                        "ibge_id": 2404507,
                        "uf_escola": "RN",
                        "municipio": "GUAMAR�",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "5k8qCL8CQISFLoGs2zFefQw67mh1",
                        "inep_id": 24071960,
                        "ibge_id": 2412005,
                        "uf_escola": "RN",
                        "municipio": "S�O GON�ALO DO AMARANTE",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "6Pm5qWEyBVMNiplDpRAoMPs3csl1",
                        "inep_id": 24056278,
                        "ibge_id": 2403251,
                        "uf_escola": "RN",
                        "municipio": "PARNAMIRIM",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "6zgorr95vWXGPl5Siu0vfRmWWZa2",
                        "inep_id": 29405041,
                        "ibge_id": 2927309,
                        "uf_escola": "BA",
                        "municipio": "SALINAS DA MARGARIDA",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "8QDRXYfBk9O7tbWmxOXIPbe5Z4N2",
                        "inep_id": 29390753,
                        "ibge_id": 2932457,
                        "uf_escola": "BA",
                        "municipio": "UMBURANAS",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "9bJb4HzsxZdSniOS9JLkL4syWl13",
                        "inep_id": 26145804,
                        "ibge_id": 2609303,
                        "uf_escola": "PE",
                        "municipio": "MIRANDIBA",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "9g3c9UqPwKfevKqOls9fQTq9veD2",
                        "inep_id": 24061921,
                        "ibge_id": 2404200,
                        "uf_escola": "RN",
                        "municipio": "GOIANINHA",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "AOvIY55w0FM7CccnqdOAVRFysag1",
                        "inep_id": 15547302,
                        "ibge_id": 1501402,
                        "uf_escola": "PA",
                        "municipio": "BEL�M",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "ATedllf1tPc3pQ0pQKjLW7wrNXR2",
                        "inep_id": 15043347,
                        "ibge_id": 1501402,
                        "uf_escola": "PA",
                        "municipio": "BEL�M",
                        "territorio": "PCU"
                    },
                    {
                        "pesquisa_id": "AUibtOVroJYeIYrG9PfTOftE9Dr1",
                        "inep_id": 24061999,
                        "ibge_id": 2404200,
                        "uf_escola": "RN",
                        "municipio": "GOIANINHA",
                        "territorio": "PCU"
                    },
                    {
                        "pesquisa_id": "Bcv2EQowm9h7aGMZ7H15K7AXQRZ2",
                        "inep_id": 25066773,
                        "ibge_id": 2500809,
                        "uf_escola": "PB",
                        "municipio": "ARA�AGI",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "C4m0FJSwGCNk16Nv3wfURqh46Pb2",
                        "inep_id": 15168468,
                        "ibge_id": 1501402,
                        "uf_escola": "PA",
                        "municipio": "BEL�M",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "CbusD2IVlZcIr0C6HdCW5PPjYxA3",
                        "inep_id": 21236534,
                        "ibge_id": 2103208,
                        "uf_escola": "MA",
                        "municipio": "CHAPADINHA",
                        "territorio": "PCU"
                    },
                    {
                        "pesquisa_id": "EzkzxZJC7Hf5lL3paApVdijk57C2",
                        "inep_id": 24035670,
                        "ibge_id": 2403103,
                        "uf_escola": "RN",
                        "municipio": "CURRAIS NOVOS",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "Fvn350bT8KUAgJG8l3z5hzzd0O02",
                        "inep_id": 13008013,
                        "ibge_id": 1304062,
                        "uf_escola": "AM",
                        "municipio": "TABATINGA",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "GoMZ4Px5gsgtMzVjuwQJGuDbHQF3",
                        "inep_id": 24043222,
                        "ibge_id": 2412906,
                        "uf_escola": "RN",
                        "municipio": "S�O TOM�",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "HBBhgu5GIfgdjGiw0fOUHJ2eBGO2",
                        "inep_id": 35081255,
                        "ibge_id": 3539301,
                        "uf_escola": "SP",
                        "municipio": "PIRASSUNUNGA",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "HXaMRgvqL0cEy7mHnNyPtVciNPx2",
                        "inep_id": 21040257,
                        "ibge_id": 2106904,
                        "uf_escola": "MA",
                        "municipio": "MON��O",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "ILrpqdXp2abccXqhdTJr91h5dKv1",
                        "inep_id": 15586154,
                        "ibge_id": 1503101,
                        "uf_escola": "PA",
                        "municipio": "GURUP�",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "L8c75ESA7UN0SDmH2VzBbZ89qal1",
                        "inep_id": 24083470,
                        "ibge_id": 2407807,
                        "uf_escola": "RN",
                        "municipio": "MONTE ALEGRE",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "LGkwmaG7NqcioFdRdRCqftsIHiv2",
                        "inep_id": 26052474,
                        "ibge_id": 2602605,
                        "uf_escola": "PE",
                        "municipio": "BREJO DA MADRE DE DEUS",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "LabBejq7suaSno1qm2tXeCVMMUw1",
                        "inep_id": 35081255,
                        "ibge_id": 3539301,
                        "uf_escola": "SP",
                        "municipio": "PIRASSUNUNGA",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "NpjEod24z9abzCLZIUkXKzCZcP83",
                        "inep_id": 33151164,
                        "ibge_id": 3302403,
                        "uf_escola": "RJ",
                        "municipio": "MACA�",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "OeqUUYlJ9RWw8raolrNDspayOt23",
                        "inep_id": 29468213,
                        "ibge_id": 2924009,
                        "uf_escola": "BA",
                        "municipio": "PAULO AFONSO",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "QJqhBiAp4tYjXjVPFloM3O5dKXl2",
                        "inep_id": 24083470,
                        "ibge_id": 2407807,
                        "uf_escola": "RN",
                        "municipio": "MONTE ALEGRE",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "SJWlbB3BbpX8bR2MOQ1kwyQIEzT2",
                        "inep_id": 35005071,
                        "ibge_id": 3550308,
                        "uf_escola": "SP",
                        "municipio": "S�O PAULO",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "TNgxRVOkTCT4fEks8Rx3OKXiPKl2",
                        "inep_id": 24064971,
                        "ibge_id": 2408102,
                        "uf_escola": "RN",
                        "municipio": "NATAL",
                        "territorio": "PCU"
                    },
                    {
                        "pesquisa_id": "UKzRAH83fGUfpj8f7hjm3UszcqW2",
                        "inep_id": 29228131,
                        "ibge_id": 2918001,
                        "uf_escola": "BA",
                        "municipio": "JEQUI�",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "UkEwDr4ZHkdaZ5vYwr59hd6UIhD2",
                        "inep_id": 24083470,
                        "ibge_id": 2407807,
                        "uf_escola": "RN",
                        "municipio": "MONTE ALEGRE",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "W2kFbZVp6ReDs8NrnnBIGw6fi9p1",
                        "inep_id": 24043354,
                        "ibge_id": 2412906,
                        "uf_escola": "RN",
                        "municipio": "S�O TOM�",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "X2lagl3kUWbJik1qSy4j3wGSDr22",
                        "inep_id": 13100394,
                        "ibge_id": 1302603,
                        "uf_escola": "AM",
                        "municipio": "MANAUS",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "X47EIZLbvkfcddL9abU3OTjHnoX2",
                        "inep_id": 31037933,
                        "ibge_id": 3106200,
                        "uf_escola": "MG",
                        "municipio": "BELO HORIZONTE",
                        "territorio": "PCU"
                    },
                    {
                        "pesquisa_id": "XqcTYg2p9YUBpBofr7exTdvgliO2",
                        "inep_id": 21166463,
                        "ibge_id": 2103505,
                        "uf_escola": "MA",
                        "municipio": "COLINAS",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "Z2eVvGgmstY2iF9Dv8SvstHq2U92",
                        "inep_id": 11041714,
                        "ibge_id": 1101609,
                        "uf_escola": "RO",
                        "municipio": "THEOBROMA",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "ZF5PqO5MJqND9MFW1sgXfkHzVnl1",
                        "inep_id": 24074985,
                        "ibge_id": 2404507,
                        "uf_escola": "RN",
                        "municipio": "GUAMAR�",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "aXjIl25NiuOlI6krWTqBN3tBg7c2",
                        "inep_id": 24088889,
                        "ibge_id": 2411205,
                        "uf_escola": "RN",
                        "municipio": "SANTA CRUZ",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "bokfNoF3IWYlhAybbOEQHvBWssT2",
                        "inep_id": 35081255,
                        "ibge_id": 3539301,
                        "uf_escola": "SP",
                        "municipio": "PIRASSUNUNGA",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "dUmzbnYyBsd7txHTnjVk5l07QTs2",
                        "inep_id": 26147041,
                        "ibge_id": 2601607,
                        "uf_escola": "PE",
                        "municipio": "BEL�M DO S�O FRANCISCO",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "eLA6oP26JvdlLE4bMOYH6kHFeyz2",
                        "inep_id": 33229813,
                        "ibge_id": 3304557,
                        "uf_escola": "RJ",
                        "municipio": "RIO DE JANEIRO",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "eiQ4Dh91rVPCUwpsRE54YCoJhTY2",
                        "inep_id": 33041903,
                        "ibge_id": 3303856,
                        "uf_escola": "RJ",
                        "municipio": "PATY DO ALFERES",
                        "territorio": "PCU"
                    },
                    {
                        "pesquisa_id": "fosGQCeFTMO2sWiK9sxc7wQPz6y1",
                        "inep_id": 24068985,
                        "ibge_id": 2408102,
                        "uf_escola": "RN",
                        "municipio": "NATAL",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "g6Q98cQEVlZzmxAyS0IS4FFrN372",
                        "inep_id": 35016962,
                        "ibge_id": 3501608,
                        "uf_escola": "SP",
                        "municipio": "AMERICANA",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "iJg7RTbCXLUcJTzRlohm84GZ4dm2",
                        "inep_id": 24055948,
                        "ibge_id": 2403251,
                        "uf_escola": "RN",
                        "municipio": "PARNAMIRIM",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "iKfh6TWjHORcs1NHeKrxmQ4kNR93",
                        "inep_id": 29323649,
                        "ibge_id": 2918456,
                        "uf_escola": "BA",
                        "municipio": "JUCURU�U",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "kux0Y3nAAeQBNJjqvh36wj0WfUL2",
                        "inep_id": 31314871,
                        "ibge_id": 3136702,
                        "uf_escola": "MG",
                        "municipio": "JUIZ DE FORA",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "kwdJHnSoiwYJzzWbkhOTrTrgEQ72",
                        "inep_id": 17004179,
                        "ibge_id": 1720804,
                        "uf_escola": "TO",
                        "municipio": "S�TIO NOVO DO TOCANTINS",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "ky2ctTcgEXTkSNSWcJtCqDAHrek1",
                        "inep_id": 24058980,
                        "ibge_id": 2408102,
                        "uf_escola": "RN",
                        "municipio": "NATAL",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "p2zvhWfQNnWcyLBPwE4riGLfoqk1",
                        "inep_id": 24032204,
                        "ibge_id": 2402006,
                        "uf_escola": "RN",
                        "municipio": "CAIC�",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "pmp4yM4fJ2PEKHrB86x40s3agOG3",
                        "inep_id": 24085715,
                        "ibge_id": 2412906,
                        "uf_escola": "RN",
                        "municipio": "S�O TOM�",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "ttv2uypDSSc9AN8TPtLnSUf0X162",
                        "inep_id": 26147041,
                        "ibge_id": 2601607,
                        "uf_escola": "PE",
                        "municipio": "BEL�M DO S�O FRANCISCO",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "uAYRHLMWrTYt2RWhWGNMEjhZDKF2",
                        "inep_id": 35081255,
                        "ibge_id": 3539301,
                        "uf_escola": "SP",
                        "municipio": "PIRASSUNUNGA",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "uMwEOKdcr6hjrQytNzLrP3TsKVA2",
                        "inep_id": 24053449,
                        "ibge_id": 2407104,
                        "uf_escola": "RN",
                        "municipio": "MACA�BA",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "uwfZVAK2K6XHJHPr4jt88R90Izt1",
                        "inep_id": 29848822,
                        "ibge_id": 2926608,
                        "uf_escola": "BA",
                        "municipio": "RIBEIRA DO POMBAL",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "wZevXxGAUkagAbwkOpsJnz2Ns3G3",
                        "inep_id": 17004110,
                        "ibge_id": 1720804,
                        "uf_escola": "TO",
                        "municipio": "S�TIO NOVO DO TOCANTINS",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "wkrHXNe6qrOWwTWFhFS5bwzGevX2",
                        "inep_id": 27226484,
                        "ibge_id": 2708709,
                        "uf_escola": "AL",
                        "municipio": "S�O MIGUEL DOS MILAGRES",
                        "territorio": "TAM"
                    },
                    {
                        "pesquisa_id": "yPhGTEVss8QeusP77JRgpUdZEvA3",
                        "inep_id": 29440521,
                        "ibge_id": 2906907,
                        "uf_escola": "BA",
                        "municipio": "CARAVELAS",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "yr5k88NqjqQkIiD5wpzGQ09EhUF2",
                        "inep_id": 35081255,
                        "ibge_id": 3539301,
                        "uf_escola": "SP",
                        "municipio": "PIRASSUNUNGA",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "z9iYXOYrwfTJqaqlxkE731LmyOf2",
                        "inep_id": 24062774,
                        "ibge_id": 2413201,
                        "uf_escola": "RN",
                        "municipio": "SENADOR GEORGINO AVELINO",
                        "territorio": "Outros"
                    },
                    {
                        "pesquisa_id": "zJR4C3MTheYipH9B3fooRv0kaXL2",
                        "inep_id": 35283997,
                        "ibge_id": 3534401,
                        "uf_escola": "SP",
                        "municipio": "OSASCO",
                        "territorio": "SAB"
                    },
                    {
                        "pesquisa_id": "zg19Qx6epjfdfZpMurqLMhoIDlp2",
                        "inep_id": 26178885,
                        "ibge_id": 2603454,
                        "uf_escola": "PE",
                        "municipio": "CAMARAGIBE",
                        "territorio": "Outros"
                    }
                ],
            }
        },
        methods: {
            
        },
        created() {

            this.pesquisas.forEach(element => {
                
                var docRef = db.collection("users").doc(element.pesquisa_id);
                
                docRef.get().then(function (doc) {

                    if (doc.exists) {
                        db.collection("users").doc(element.pesquisa_id).update({"school.territory": element.territorio});
                        db.collection("users").doc(element.pesquisa_id).update({"school.uf": element.u})
                    }

                });

            });

        }

    }

</script>
