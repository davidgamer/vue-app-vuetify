<template>
  <v-row>
    <v-card class="mx-auto pa-6 mb-2"  outlined>
      <v-row>
        <line-chart></line-chart>
      </v-row>
    </v-card>
    <v-card class="mx-auto pa-6 mb-2" outlined>
      <v-row>
        <bar-chart></bar-chart>
      </v-row>
    </v-card>
        <v-card class="mx-auto pa-6 mb-2"  outlined>
      <v-row>
        <pie-chart></pie-chart>
      </v-row>
    </v-card>
   <v-row>
      <twitter class="mb-2" />
   </v-row>
  </v-row>
</template>

<script>
// @ is an alias to /src

import LineChart from "../graphs/Linechart";
import Barchart from "../graphs/Barchart";
import Piechart from "../graphs/Piechart";
import Twetter from "../components/twittercard"
export default {
  name: "home",
  components: {
    "line-chart": LineChart,
    "bar-chart": Barchart,
    "pie-chart": Piechart,
    "twitter": Twetter
  }
};
</script>
