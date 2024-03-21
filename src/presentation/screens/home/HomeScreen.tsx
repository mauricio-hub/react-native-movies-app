import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { loading, nowPlaying, popular, topRated, upComing,popularNextPage } = useMovies();

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 20 }}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          movies={popular}
          title="Popular Movies"
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel movies={topRated} title="Top Rated" />
        <HorizontalCarousel movies={upComing} title="Upcoming" />
      </View>
    </ScrollView>
  );
};
