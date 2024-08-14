import OpenAI from 'openai';
import {openAIKey} from './constants';

const openAI = new OpenAI({
  apiKey: openAIKey ,
  dangerouslyAllowBrowser: true
});
export default openAI;
