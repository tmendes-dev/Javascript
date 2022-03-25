const func = (obj) => {
    try {
        console.log(obj.name.ToUpperCase());
    } catch (error) {
        treatError(error);
    } finally {
        console.log('finally');
    }
}
const treatError = (error) => {
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    };
}
const obj = { str: 'Test!' };

func(obj);