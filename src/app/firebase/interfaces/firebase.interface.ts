export interface Canal {
  id: number;
  nombre: string;
}

export interface Notificacion {
  id: number;
  titulo: string;
  descripcion: string;
  canal: string;
  servicio: string;
  image: string;
}
