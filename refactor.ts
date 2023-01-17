import axios from 'axios';

class UserProvider {
    async predictAgeAndGender(names: string[]) {
        const response: any = {};

        for await (const name of names) {
            // Response schema: { age: number; count: number; name: string; }
            const { data: { age } } = await axios.get(`https://api.agify.io?name=${name}`);
            // Response schema: { gender: string; count: number; name: string; probability: number; }
            const { data: { gender } } = await axios.get(`https://api.genderize.io?name=${name}`);

            response[name] = { age, gender };
        }

        return response;
    }
}

(async () => {
    const provider = new UserProvider();

    const result = await provider.predictAgeAndGender(['Luis', 'Mike', 'Stephen', 'Christian']);

    console.log(result);
})();