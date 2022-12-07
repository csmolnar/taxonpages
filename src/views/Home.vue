// Home.vue

<template>
  <v-container>
    <v-row justify="center">
      <v-col 
        col="12"
        sm="6"
      >
        <v-container>
          <v-text-field
            label="Search..."
            placeholder="Example: Tabanidae"
            prepend-inner-icon="mdi-magnify"
          >

          </v-text-field>
        </v-container>
      </v-col>
      <v-col
        col="12"
        sm="6"
      >
        <GMapMap
          :center="center"
          :zoom="9"
          map-type-id="terrain"
          style="width: 100%; height: 400px"
        >
        <!-- <GMapPolygon
          id="selected-area-polygon"
          :paths="paths"
          :clickable="true"
          :draggable="true"
          :editable="true"
          @dragend="updateCoordinates($event)"
          @set_at="updateCoordinates($event)"
          @click="updateCoordinates($event)"
        /> -->
          <GMapRectangle
            ref="selectedArea"
            :bounds="bounds"
            :editable="true"
            :draggable="true"
         />
          <!-- <GMapCluster> -->
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="false"
              :draggable="false"
            />
          <!-- </GMapCluster> -->
        </GMapMap>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {
    this.$refs.selectedArea.$rectanglePromise.then( (rectangle) => {
      // console.log(rectangle)
      ["bounds_changed", "dragend"].forEach((eventName) => {
        rectangle.addListener(eventName, () => {
          console.log({ bounds: rectangle.getBounds()?.toJSON(), eventName });
        });
      });
    });
  },
  data() {
    return {
      center: {lat: 43.1356, lng: -70.9333},
      markers: [
        {
          position: {
            lat: 43.1356, lng: -70.9333
          },
        }
      ],
      paths: [
        {
            lat: 43.0356, lng: -71.0333
        },
        {
            lat: 43.0356, lng: -70.8333
        },
        {
            lat: 43.2356, lng: -70.8333
        },
        {
            lat: 43.2356, lng: -71.0333
        }
      ],
      bounds: {
        north: 43.2356,
        south: 43.0356,
        west: -71.0333,
        east: -70.8333
      }
    }
  },
  setup() {

  },
  methods: {
    updateCoordinates(e){console.log(e)},
    updateSearch(e) {console.log(e)}
  }
}
</script>