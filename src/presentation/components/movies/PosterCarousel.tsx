import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Movie } from "../../../core/entities/movie.entity";
import { MoviePoster } from "./MoviePoster";

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({ height = 400, movies }: Props) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: height }}
      >
        {movies.map((movie) => (
         < MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
