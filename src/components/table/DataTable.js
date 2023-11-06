import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { Input, Select, Table } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../buttons/buttons';

function DataTable({ filterOption, filterOnchange, rowSelection, tableData, columns }) {


 
  
  
  return (
    <>
      {filterOption ? (
        <div className="flex items-center justify-center w-full mt-5 mb-[25px] md:flex-col md:justify-center gap-[15px]">
          {!filterOnchange ? (
            <div className="inline-flex items-center flex-wrap w-full gap-[20px] md:justify-center">
              <div className="inline-flex items-center">
                <span className="ltr:mr-2 rtl:ml-2 dark:text-white60">Id:</span>
                <Input
                  className="h-10 text-body dark:text-white60 bg-white dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
                  placeholder="Search with Id"
                />
              </div>
              <div className="inline-flex items-center">
                <span className="ltr:mr-2 rtl:ml-2 dark:text-white60">Status:</span>
                <Select style={{ width: 200 }} defaultValue="active">
                  <Select.Option value="active">Active</Select.Option>
                  <Select.Option value="deactivated">Deactivated</Select.Option>
                  <Select.Option value="blocked">Blocked</Select.Option>
                </Select>
              </div>
              <div className="inline-flex items-center">
                <Button type="primary" size="small"  transparented>
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            <div className="inline-flex items-center flex-wrap w-full gap-[20px] md:justify-center">
              <div className="inline-flex items-center">
                <span className="ltr:mr-2 rtl:ml-2 dark:text-white60">Id:</span>
                <Input
                 
                  className="h-10 text-body dark:text-white60 bg-white dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
                  placeholder="Search with Id"
                />
              </div>
              <div className="inline-flex items-center">
                <span className="ltr:mr-2 rtl:ml-2 dark:text-white60">Status:</span>
                <Select  style={{ width: 200 }} defaultValue="active">
                  <Select.Option value="active">Active</Select.Option>
                  <Select.Option value="deactivated">Deactivated</Select.Option>
                  <Select.Option value="blocked">Blocked</Select.Option>
                </Select>
              </div>
            </div>
          )}
          <div className="min-ssm:min-w-[280px]">
            <Input
              
              className="h-10 text-body dark:text-white60 bg-white dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
              size="default"
              placeholder="Search"
           
            />
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="table-responsive hover-tr-none table-th-shape-none table-last-th-text-right table-th-border-none table-head-rounded table-td-border-none ant-pagination-custom-style ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none dark-border-row">
      <Table
            rowSelection={{
              // type: state.selectionType,
              ...rowSelection,
            }}
            pagination={{ pageSize: 10, showSizeChanger: true }}
            dataSource={tableData}
            columns={columns}
          />
      </div>
    </>
  );
}

DataTable.propTypes = {
  filterOption: PropTypes.bool,
  filterOnchange: PropTypes.bool,
  rowSelection: PropTypes.bool,
  tableData: PropTypes.array,
  columns: PropTypes.array,
};
export default DataTable;
