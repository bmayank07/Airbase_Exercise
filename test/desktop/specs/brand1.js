import keymethods from "../utils/keymethods.js"
const brand1 = await keymethods.testDataReader('smartWatchesBrands', 'brand1')

import { smartWatchesIndex } from "./smartwatches.js";
smartWatchesIndex(brand1)

