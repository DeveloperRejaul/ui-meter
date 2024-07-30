import { Text } from "react-native";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function Button() {
  return <Text> Hello World </Text>
}