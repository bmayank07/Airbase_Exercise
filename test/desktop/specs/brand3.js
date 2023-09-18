import keymethods from "../utils/keymethods.js"
const brand3 = await keymethods.testDataReader('smartWatchesBrands', 'brand3')

import { smartWatchesIndex } from "./smartwatches.js";
smartWatchesIndex(brand3)
