export function loading(flag: string) {

    // tslint:disable-next-line:only-arrow-functions
    return function(target: any, key: string, descriptor: any) {

        const originalMethod = descriptor.value;

        descriptor.value = function(...args) {
            this[flag] = true;
            const result = originalMethod.apply(this, args);

            if (result) {
                result.next = (val) => {
                    this[flag] = false;
                    return result._next(val);
                };
                result.error = (err) => {
                    // console.log(err);
                    this[flag] = false;
                    return result._error(err);
                };
            } else {
                this[flag] = false;
            }

            return result;
        };

        return descriptor;
    };
}
