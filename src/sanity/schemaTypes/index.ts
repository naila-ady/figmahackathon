import { type SchemaTypeDefinition } from 'sanity';
import chefs from './chef';
import foods from './food';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs],
};