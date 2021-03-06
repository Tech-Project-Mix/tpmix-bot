require("@tensorflow/tfjs-node");
const use = require("@tensorflow-models/universal-sentence-encoder");

use.load().then((model) => {
  // Embed an array of sentences.
  const sentences = ["My name is Stanky.", "Jezus Lord", "reebaleeba"];
  model.embed(sentences).then((embeddings) => {
    // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
    // So in this example `embeddings` has the shape [2, 512].
    embeddings.print(true /* verbose */);
  });
});
