import React from "react";
import { View, Text, FlatList } from "react-native";
import { FullMovie } from "../../../core/entities/movie.entity";
import { Formatter } from "../../../config/helpers/formatter";
import { Cast } from "../../../core/entities/cast.entity";
import { CastActor } from "../cast/CastActor";

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text>{movie.rating}</Text>

          <Text style={{ marginLeft: 5 }}>-{movie.genres.join(", ")}</Text>
        </View>
        <Text style={{ fontSize: 23, marginLeft: 5 }}>Sinopsis</Text>

        <Text style={{ fontSize: 15, marginTop: 5 }}>{movie.description}</Text>

        <Text style={{ fontSize: 23, marginLeft: 5 }}>Presupuesto</Text>
        <Text style={{ fontSize: 23, marginTop: 5 }}>
          {Formatter.formatCurrency(movie.budget)}
        </Text>

        {/* casting */}
        <Text style={{ fontSize: 23, marginLeft: 5 }}>Reparto</Text>

        <FlatList
          data={cast}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};
