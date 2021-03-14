<template>
    <div class="CreateTrip">
        <div class="main-title"><h1>投稿フォーム</h1></div>
        <div class="input-header">
            <v-text-field
            label="旅のタイトル"
            :rules="rules"
            hide-details="auto"
            ></v-text-field>
            <v-autocomplete
            ref="country"
            v-model="country"
            :rules="[() => !!country || '旅行先を選択してください']"
            :items="countries"
            label=""
            placeholder="旅行先"
            required
            ></v-autocomplete>
            <v-slider
            class="cost-slider"
            v-model="value"
            :thumb-size="52"
            step="10000"
            min="0"
            max="100000"
            label="費用(円)"
            thumb-label="always"
            ticks
            ></v-slider>
        </div>
        
    </div>
</template>

<script>
export default {
    data: () => ({
      countries: ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府', '大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'],
      errorMessages: '',
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      formHasErrors: false,
    }),
}
</script>

<style>
.main-title h1 {
    text-align: left;
    font-size: 40px;
    margin: 40px 0 35px 20px;
}
.input-header {
    width: 90%;
    margin: auto;
}
.cost-slider {
    margin-top: 60px;
}
</style>