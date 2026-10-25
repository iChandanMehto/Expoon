import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FILTER_OPTIONS, FilterOptions } from '../../constants/Tasks'
import Color from '../../constants/Colors';

type FiltertabesProps = {
    selected: FilterOptions;
    onSelect: (filter: FilterOptions) => void;


}

const FilterTabs = ({ selected, onSelect }: FiltertabesProps) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}

        >
            {
                FILTER_OPTIONS.map((item) => {
                    const isSelected = item == selected;
                    return (
                        <TouchableOpacity
                            key={item}
                            style={[styles.tab, isSelected && styles.tabSelected]}
                            onPress={() => onSelect(item)}
                        >

                            <Text
                                style={[styles.tabText, isSelected && styles.tabTextSelected]}
                            >
                                {item}
                            </Text>

                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default FilterTabs

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 10,
        paddingVertical: 12,
    },
    tab: {
        alignSelf: "flex-start",
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 22,
        backgroundColor: Color.surface,
        borderWidth: 1,
        borderColor: Color.border,
    },
    tabSelected: {
        backgroundColor: Color.primary,
        borderColor: Color.primary,
    },
    tabText: {
        fontSize: 14,
        fontWeight: "500",
        color: Color.textSecondary,
    },
    tabTextSelected: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
});