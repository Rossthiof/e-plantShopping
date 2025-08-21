import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array der Produkte im Warenkorb
  },
  reducers: {
    // ✅ Produkt hinzufügen
    addItem: (state, action) => {
      const { name, image, price } = action.payload; // Produktdetails extrahieren
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        // Wenn das Produkt schon im Warenkorb ist → Menge +1
        existingItem.quantity++;
      } else {
        // Neues Produkt ins Array pushen
        state.items.push({ name, image, price, quantity: 1 });
      }
    },

    // ✅ Produkt entfernen
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // ✅ Produktanzahl aktualisieren
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Actions exportieren
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Reducer exportieren für store.js
export default cartSlice.reducer;
