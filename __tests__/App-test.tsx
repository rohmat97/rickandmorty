/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer, { act, create } from "react-test-renderer";
import { LektonBold, LektonNormal } from "../src/component/LektonText";
import EmptyContent from "../src/component/EmptyContent";
import EmptyDetails from "../src/component/EmptyDetails";
import ContentDetails from "../src/component/ContentDetails";
import ContentCharacters from "../src/component/ContentCharacters";
import ComponentEpisode from "../src/component/ComponentEpisode";
import App from "../App";
import { Image, View } from "react-native";

const sampleResponse = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character/?page=20",
    prev: "https://rickandmortyapi.com/api/character/?page=18",
  },
  results: [
    {
      id: 361,
      name: "Toxic Rick",
      status: "Dead",
      species: "Humanoid",
      type: "Rick's Toxic Side",
      gender: "Male",
      origin: {
        name: "Alien Spa",
        url: "https://rickandmortyapi.com/api/location/64",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/27"],
      url: "https://rickandmortyapi.com/api/character/361",
      created: "2018-01-10T18:20:41.703Z",
    },
    // ...
  ],
};

it("test render component text Lekton Bold", () => {
  const tree = renderer.create(<LektonBold>LektonBold</LektonBold>).toJSON();
  expect(tree).toMatchSnapshot();
});
it("test render component text Lekton Regular", () => {
  const tree = renderer
    .create(<LektonNormal>LektonNormal</LektonNormal>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("test render component empty content", () => {
  const tree = renderer.create(<EmptyContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("test render component empty content detail", () => {
  const tree = renderer.create(<EmptyDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("test render component ContentCharacters", () => {
  const tree = renderer
    .create(<ContentCharacters item={sampleResponse.results} navigation={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("test render component ContentDetails", () => {
  const tree = renderer
    .create(<ContentDetails detailData={sampleResponse.results} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("test render component ComponentEpisode", () => {
  const tree = renderer
    .create(<ComponentEpisode item={sampleResponse.results.episode} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
