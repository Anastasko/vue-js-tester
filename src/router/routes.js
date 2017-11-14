/**
 * Created by lorry on 11/15/17.
 */
import Tests from '@/components/Tests'
import Theory from '@/components/Theory'
import Program from '@/components/Program'

export default [
  {
    path: '/',
    name: 'Tests',
    component: Tests
  }, {
    path: '/program',
    name: 'Program',
    component: Program
  }, {
    path: '/theory',
    name: 'Theory',
    component: Theory
  }
]
