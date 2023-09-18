import keymethods from "../utils/keymethods.js"
const brand2 = await keymethods.testDataReader('smartWatchesBrands', 'brand2')

import { smartWatchesIndex } from "./smartwatches.js";
smartWatchesIndex(brand2)
