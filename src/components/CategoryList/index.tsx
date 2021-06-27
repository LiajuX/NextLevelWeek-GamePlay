import React from 'react';
import { ScrollView } from 'react-native';

import { Category } from '../Category';

import { styles } from './styles';
import { categories } from '../../utils/categories';

type CategoryListProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckbox?: boolean;
};

export function CategoryList({ 
  categorySelected, 
  setCategory,
  hasCheckbox = false,
}: CategoryListProps) {
  return (
    <>
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          selected={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckbox={hasCheckbox}
        />
      ))}
    </ScrollView>
  </>
  );
}
