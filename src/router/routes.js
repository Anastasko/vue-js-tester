/**
 * Created by lorry on 11/15/17.
 */
import Tests from '@/components/Tests'
import Theory from '@/components/Theory'
import Program from '@/components/Program'
import Tree from '@/components/Tree'

export default [
  {
    path: '/theory',
    name: 'Theory',
    component: Theory
  }, {
    path: '/',
    name: 'Tests',
    component: Tests
  }, {
    path: '/program',
    name: 'Program',
    component: Program
  }, {
    path: '/tree',
    name: 'Tree',
    component: Tree
  }
]
