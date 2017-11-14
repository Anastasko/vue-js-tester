<template>
  <div>
    <button @click="gen()">Скласти тести</button>
    <h2>Тести</h2>
    <div v-for="(test, testNumber) of shownTests" class="box" :class="klass(test)">
      {{(testNumber+1) + '. ' + test.question}}
      <br/>
      <template v-for="(ans, ind) of test.answers">
        <input type="radio" :value="ind" :name="testNumber" v-model="test.selected"/>
        <label>{{ans}}</label>
        <br/>
      </template>
    </div>
    <label v-if="showScore">{{results()}}</label>
    <br/>
    <button @click="check">Перевірка</button>
  </div>
</template>

<script>
import testData from '../assets/testData'
import _ from 'lodash'

export default {
  data () {
    return {
      testData: testData,
      shownTests: [],
      N: 10,
      score: 0,
      showScore: false
    }
  },
  methods: {
    gen () {
      _.each(this.testData, test => {
        test.selected = undefined
      })
      this.shownTests = _.shuffle(this.testData).slice(0, this.N)
      this.showScore = false
    },
    check () {
      this.score = 0
      _.each(this.shownTests, test => {
        if (test.selected === test.correct) {
          this.score++
        }
      })
      this.showScore = true
    },
    results () {
      let str = `Вірно ${this.score} з ${this.N}. `
      if (this.score === this.N) {
        str += 'Абсолютно вірно, вітаємо!'
      }
      return str
    },
    klass (test) {
      if (!this.showScore) {
        return {}
      }
      return {
        correct: test.selected === test.correct,
        wrong: test.selected !== test.correct
      }
    }
  },
  mounted: function () {
    this.gen()
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .box {
    margin: 10px 50px 10px 50px;
    display: block;
    text-align: left;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 25px 35px;
  }

  .box.correct {
    border: 2px solid green;
  }
  .box.wrong {
    border: 2px solid red;
  }
</style>
