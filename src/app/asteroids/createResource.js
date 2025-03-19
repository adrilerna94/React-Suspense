export default function createResource(asteroidsFetch) {
    let status= 'pending'; // estado inicial
    let result;
    let error;

    const promise = asteroidsFetch().then(
        (res) => {
            status = 'success';
            result = res;
        },
        (err) => {
            status = 'error';
            error = err;
        }
    );

    return {
        read() {
            if (status === 'pending') {
                throw promise;
            }
            if (status === 'error') {
                throw promise;
            }
            return result;
        },
    };
}