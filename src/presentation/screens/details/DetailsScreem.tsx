import React from "react";
import { Text, View } from "react-native";
import { RootStackParams } from "../../navigations/Navigations";
import { StackScreenProps } from "@react-navigation/stack";
import { useSingleMovie } from "../../hooks/useSingleMovie";
import { MovieHeader } from "../../components/singleMovie/MovieHeader";
import { MovieDetails } from "../../components/singleMovie/MovieDetails";
import { ScrollView } from "react-native-gesture-handler";

interface Props extends StackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;

  const { loading, movie } = useSingleMovie(movieId);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        backdrop={movie!.backdrop}
        poster={movie!.poster}
        title={movie!.title}
      />

      <MovieDetails movie={movie!} />
    </ScrollView>
  );
};
