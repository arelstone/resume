<template>
<section>
  <h1>Rock paper scissors</h1>
<section v-for="player in 2" :key="player">
        <h5>Player {{player}}</h5>
        <div v-if="!selected[player]">
            <button v-for="option in options" 
                @click="selectOption(`p${player}`, option)" 
                :key="option">{{option}}</button>
        </div>
</section>
    <pre>{{selected}}</pre>
    <pre>{{getWinner(selected.p1, selected.p2)}}</pre>
  </section>
</template>



<script>
import rules from "./rules";
import options from "./options";

export default {
  name: "game",
  data() {
    return {
      selected: { p1: "", p2: "" },
      options
    };
  },
  methods: {
    getWinner(p1, p2) {
      return rules[`${p1}_${p2}`];
    },
    randomize() {
      const arr = ["rock", "paper", "scissors"];
      return (this.selected["p2"] = arr[Math.floor(Math.random() * 3)]);
    },
    selectOption(player, choise) {
      this.selected[player] = choise.toLowerCase();
      this.randomize()
    }
  }
};
</script>
