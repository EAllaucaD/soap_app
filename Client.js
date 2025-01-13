import { createClient } from "soap";

const url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

async function getSoapData() {
    return new Promise((resolve, reject) => {
        createClient(url, (err, client) => {
            if (err) {
                return reject(err);
            }

            const args = { sCountryISOCode: "EC" };
            const data = {};

            client.CountryName(args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                data.CountryNameResult = result.CountryNameResult;

                client.CapitalCity(args, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    data.CapitalCityResult = result.CapitalCityResult;

                    client.CountryCurrency(args, (err, result) => {
                        if (err) {
                            return reject(err);
                        }
                        data.CountryCurrencyResult = result.CountryCurrencyResult;

                        client.CountryFlag(args, (err, result) => {
                            if (err) {
                                return reject(err);
                            }
                            data.CountryFlagResult = result.CountryFlagResult;
                            resolve(data);
                        });
                    });
                });
            });
        });
    });
}

export default getSoapData;
