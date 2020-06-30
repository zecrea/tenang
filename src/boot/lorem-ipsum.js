import { LoremIpsum } from "lorem-ipsum"
import Vue from 'vue'
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

Vue.prototype.$loremGen = lorem
export default lorem