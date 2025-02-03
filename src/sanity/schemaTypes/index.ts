import { type SchemaTypeDefinition } from 'sanity';
import chefs from './chef';
import foods from './food';
import order from './order';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs ,order],
};