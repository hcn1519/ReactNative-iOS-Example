import React, {Component} from 'react'
import TableView from 'react-native-tableview'
import { NativeModules } from 'react-native'

const { Section, Item } = TableView

export default class SettingTableView extends Component {

  tableViewEvent(event) {
    console.log(event);
    NativeModules.RNTableViewListener.didSelectTableViewCell();
  }

  render() {
    return (
      <TableView
        style={{ flex: 1, backgroundColor: "rgb(247, 247, 247)" }}
        allowsToggle
        allowsMultipleSelection
        tableViewStyle={TableView.Consts.Style.Grouped}
        tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
        onPress={(event) => {this.tableViewEvent(event)}}
      >
        <Section label="Section 0" arrow>
          <Item value="1" detail="Detail1">
            Item 1
          </Item>
          <Item value="2">Item 2</Item>
          <Item>Item 3</Item>
        </Section>

        <Section label="Section 1" arrow={false}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Section>

        <Section label="Section 2" arrow={false}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Section>
      </TableView>
    );
  }
}
