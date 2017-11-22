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
    name: 'Теорія',
    component: Theory
  }, {
    path: '/program',
    name: 'Код програми',
    component: Program
  }, {
    path: '/tree',
    name: 'Ілюстрація',
    component: Tree
  }, {
    path: '/',
    name: 'Тести',
    component: Tests
  }
]
