export interface Deuda{
    orden: string;
    fecha_sistema: Date;
    fecha_venta: Date;
    unidad_negocio: number;
    retraso_dias: Number;
    retraso_semanas: Number;
    responsable: number;
    descripcion: string;
    cliente: number;
    deuda_inicial: number;
    pagos: number;
    deuda_final: number;
    notas: string;
    moneda: number;
}

