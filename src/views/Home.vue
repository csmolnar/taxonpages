// Home.vue

<template>
  <v-container>
    <v-row justify="center">
      <v-col 
        col="12"
        sm="6"
      >

        <v-container>
          <v-autocomplete
            v-model="model"
            v-model:search="search"
            :items="entries"
            :loading="isLoading"
            hide-no-data
            hide-selected
            item-title="name"
            item-value="name"
            label="Taxonomy"
            placeholder="Start typing..."
            prepend-icon="mdi-database-search"
            return-object
          ></v-autocomplete>
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
      },
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }
  },
  setup() {
  },
  methods: {
    updateCoordinates(e){console.log(e)},
    updateSearch(e) {console.log(e)}
  },
  computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {entry.name})
      },
  },
  watch: {
      search (searchVal) {
        if (searchVal.length>0) {
          // Items have already been loaded
          console.log(searchVal)

          // if (this.entries.length > 0) return

          // Items have already been requested
          if (this.isLoading) return

          this.isLoading = true

          // Lazily load input items
          // fetch('https://api.publicapis.org/entries')
          fetch('https://sfg.taxonworks.org/api/v1/otus/'+'?project_token=BS2jGvMz1w4CDxZyQ1h1Qg')
            .then(res => res.json())
            .then(res => {
              const entries = res.filter( e => (typeof e.name === 'string' && e.name.toLowerCase().includes( searchVal.toLowerCase() )) )
              console.log(entries)
              this.entries = entries
              // this.entries = entries.slice(0, 100)
              // this.count = 100
            })
            .catch(err => {
              console.log(err)
            })
            .finally(() => (this.isLoading = false))

        } else {
          this.entries = []
        }
        
      },
  }
}
</script>

<!-- export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    fields () {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a',
        }
      })
    },
    items () {
      return this.entries.map(entry => {
        const Description = entry.Description.length > this.descriptionLimit
          ? entry.Description.slice(0, this.descriptionLimit) + '...'
          : entry.Description

        return Object.assign({}, entry, { Description })
      })
    },
  },

  watch: {
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true

      // Lazily load input items
      fetch('https://api.publicapis.org/entries')
        .then(res => res.json())
        .then(res => {
          const { entries } = res
          this.entries = entries.slice(0, 100)
          this.count = 100
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
  },

} -->