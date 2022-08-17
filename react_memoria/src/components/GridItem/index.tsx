import { GridItemType } from '../../types/GridTypes'
import * as C from './styles'
import b7Svg from '../../svgs/b7.svg'
import { items } from '../../data/items'
type Props = {
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
  return (
    <C.Container onClick={onClick}>
    {!item.permanentShow && !item.show &&
      <C.Icon src={b7Svg} alt="" />
    }
    {(item.permanentShow || item.show) && item.item !== null &&
      <C.Icon src={items[item.item].icon} alt="" />
    }
    </C.Container>
  )
}