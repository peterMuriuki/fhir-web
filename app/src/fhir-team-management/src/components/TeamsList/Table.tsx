import React from 'react';
import { Table as AntTable, Button, Divider, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Organization } from '../../ducks/organizations';
import { Link } from 'react-router-dom';
import { URL_EDIT_TEAM } from '../../constants';
import { loadSingleTeam } from '.';
import { TeamsDetailProps } from '../TeamsDetail';

export interface TableData extends Organization {
  key: string;
}

export interface Props {
  data: TableData[];
  fhirbaseURL: string;
  setDetail: (isLoading: TeamsDetailProps | 'loading' | null) => void;
  onViewDetails?: typeof loadSingleTeam;
}

const Table: React.FC<Props> = (props: Props) => {
  const { setDetail, onViewDetails, fhirbaseURL } = props;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      editable: true,
      sorter: (a: TableData, b: TableData) => a.name.localeCompare(b.name),
    },
    {
      title: 'Actions',
      width: '10%',

      // eslint-disable-next-line react/display-name
      render: (_: unknown, record: TableData) => (
        <span className="d-flex justify-content-end align-items-center">
          <Link to={URL_EDIT_TEAM + record.identifier.toString()}>
            <Button type="link" className="m-0 p-1">
              Edit
            </Button>
          </Link>
          <Divider type="vertical" />
          <Dropdown
            overlay={
              <Menu className="menu">
                <Menu.Item
                  className="viewdetails"
                  onClick={() => {
                    if (onViewDetails) onViewDetails({ row: record, fhirbaseURL, setDetail });
                  }}
                >
                  View Details
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
            arrow
            trigger={['click']}
          >
            <MoreOutlined className="more-options" />
          </Dropdown>
        </span>
      ),
    },
  ];

  return (
    <AntTable
      pagination={{
        showQuickJumper: true,
        showSizeChanger: true,
        defaultPageSize: 5,
        pageSizeOptions: ['5', '10', '20', '50', '100'],
      }}
      dataSource={props.data}
      columns={columns}
    />
  );
};

export default Table;
