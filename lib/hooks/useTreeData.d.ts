import * as React from 'react';
import type { DataNode, InternalDataEntity, SimpleModeConfig, FieldNames } from '../interface';
/**
 * Convert `treeData` or `children` into formatted `treeData`.
 * Will not re-calculate if `treeData` or `children` not change.
 */
export default function useTreeData(treeData: DataNode[], children: React.ReactNode, { getLabelProp, simpleMode, fieldNames, }: {
    getLabelProp: (node: DataNode) => React.ReactNode;
    simpleMode: boolean | SimpleModeConfig;
    fieldNames: FieldNames;
}): InternalDataEntity[];
