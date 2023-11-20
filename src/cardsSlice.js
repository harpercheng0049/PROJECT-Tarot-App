import { createSlice } from "@reduxjs/toolkit";

// 引入塔羅資料庫
import tarotData from "./Data/tarotData";

const cardsSlice = createSlice({
  name: "cardSlice",
  initialState: {
    initialDrawCards: []
  },
  reducers: {
    drawOneCard: (state) => {
      let drawnCard;
      do {
        const randomIndex = Math.floor(Math.random() * tarotData.length);
        drawnCard = tarotData[randomIndex];
      } while (state.initialDrawCards.some((card) => card.id === drawnCard.id));

      const isReversed = Math.random() < 0.5;
      drawnCard = { ...drawnCard, reversed: isReversed };
      state.initialDrawCards = [drawnCard];
    },
    drawBMSCard: (state) => {
      const drawnThreeCards = [];
      while (drawnThreeCards.length < 3) {
        let drawnCard;
        do {
          const randomIndex = Math.floor(Math.random() * tarotData.length);
          drawnCard = tarotData[randomIndex];
        } while (
          state.initialDrawCards.some((card) => card.id === drawnCard.id)
        );

        const isReversed = Math.random() < 0.5;
        drawnThreeCards.push({ ...drawnCard, reversed: isReversed });
      }
      state.initialDrawCards = [...drawnThreeCards];
    },
    drawTimeCard: (state) => {
      const drawnThreeCards = [];
      while (drawnThreeCards.length < 3) {
        let drawnCard;
        do {
          const randomIndex = Math.floor(Math.random() * tarotData.length);
          drawnCard = tarotData[randomIndex];
        } while (
          state.initialDrawCards.some((card) => card.id === drawnCard.id)
        );

        const isReversed = Math.random() < 0.5;
        drawnThreeCards.push({ ...drawnCard, reversed: isReversed });
      }
      state.initialDrawCards = [...drawnThreeCards];
    },
    drawNoSpreadCard: (state) => {
      const drawnFiveCards = [];
      while (drawnFiveCards.length < 5) {
        let drawnCard;
        do {
          const randomIndex = Math.floor(Math.random() * tarotData.length);
          drawnCard = tarotData[randomIndex];
        } while (
          state.initialDrawCards.some((card) => card.id === drawnCard.id)
        );

        const isReversed = Math.random() < 0.5;
        drawnFiveCards.push({ ...drawnCard, reversed: isReversed });
      }
      state.initialDrawCards = [...drawnFiveCards];
    },
    clearDrawnCard: (state) => {
      return {
        ...state,
        initialDrawCards: []
      };
    }
  }
});

export const {
  drawOneCard,
  drawBMSCard,
  drawTimeCard,
  drawNoSpreadCard,
  clearDrawnCard
} = cardsSlice.actions;

export default cardsSlice.reducer;
