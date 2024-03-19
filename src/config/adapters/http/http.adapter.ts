

export abstract class HttpAdapter {

    // es un metodo abstracto que recibe un url y un objeto 
    //de parametros y devuelve una promesa de tipo T
    //record es un tipo de dato que representa un objeto
    //de clave y valor, es decir, un diccionario
    abstract get<T>(url: string, options?: Record<string,unknown>): Promise<T>;

}