import React from 'react'
import Table from '../../comps/table/Table'
import { Button } from '../../components/buttons/buttons';
export default function adminPage() {
  return (
    <div>
        <Table />
        <Button children='add' />
    </div>
  )
}
