import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Brand 3',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Brand 4',
    createdAt: new Date().getTime()
  }
]