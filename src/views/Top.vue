<template>
  <div class="home">
    <div class="top-area">
      <img class="top-img" src="../assets/zekkei_mv.jpg">
    </div>

    <div class="mx-4">
      <v-container class="search-bar">
        <v-row no-gutters align="center">
          <v-col cols="9">
            <v-text-field
              label="検索"
              clearable
              class=""
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-btn color="accent" class="mb-2">
              検索
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <div>
        <!-- ここでforまわしてください！ -->
        <div
          v-ripple
          class="my-5"
          v-for="i in 3"
          v-bind:key="i"
        >
          <v-card style="text-align: left">
            <div class="trip-card-content">
              <v-container class="pa-4">
                <v-row>
                  <v-col cols="8" class="py-0">
                    <vcard-title
                      class="subtitle-1 font-weight-bold accent--text"
                    >
                      京都散策お手軽コース
                      </vcard-title>
                    <p class="ma-0">京都</p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col cols="3" class="py-0">
                    <p>3000円</p>
                    <p>バス／徒歩</p>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-card>
        </div>
      </div>


    </div>

    <div class="btn-create">
      <v-btn class="mx-2" fab dark color="#715841" to="/trips/new">
        <v-icon dark>
            mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>

<style>
.top-area img {
  width: 100%;
  height: auto;
}
.btn-create {
  width: 70px;
  height: 60px;
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.trip-card-content p {
  margin: 0px;
  color: #777;
  font-size: 0.7rem;
}
</style>