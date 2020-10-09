import TicStore from './ticStore'
import GoStore from './goStore'

const ticStore = new TicStore()
const go9Store = new GoStore(9)
const go13Store = new GoStore(13)
const go19Store = new GoStore(19)

export{
    ticStore as TicStore,
    go9Store as Go9Store,
    go13Store as Go13Store,
    go19Store as Go19Store
}