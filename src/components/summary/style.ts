import { StyleSheet } from "react-native";

export const styleDeposit = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    height: 180,
    width: 332 - 32,
    borderRadius: 5,
    elevation: 10,
    padding: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontSize: 18, color: '#000' },
  icon: {
    borderWidth: 1.5,
    borderRadius: 50,
    height: 35,
    width: 35,
    borderColor: '#33CC95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { flex: 1, justifyContent: 'center', paddingTop: 20 },
  price: { fontSize: 30, color: '#000' },
  descriptionDate: {
    fontSize: 14,
    color: "#969CB2"
  }

});

export const styleOutflow = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    height: 180,
    width: 332 - 32,
    borderRadius: 5,
    elevation: 10,
    padding: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontSize: 18, color: '#000' },
  icon: {
    borderWidth: 1.5,
    borderRadius: 50,
    height: 35,
    width: 35,
    borderColor: '#E52E4D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { flex: 1, justifyContent: 'center', paddingTop: 20 },
  price: { fontSize: 30, color: '#000' },
  descriptionDate: {
    fontSize: 14,
    color: "#969CB2"
  }

})

export const styleTotal = StyleSheet.create({
  container: {
    backgroundColor: '#33CC95',
    height: 180,
    width: 332 - 32,
    borderRadius: 5,
    elevation: 10,
    padding: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontSize: 18, color: '#FFFF' },
  icon: {
    borderWidth: 1.5,
    borderRadius: 50,
    height: 35,
    width: 35,
    borderColor: '#FFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  body: { flex: 1, justifyContent: 'center', paddingTop: 20 },
  price: { fontSize: 30, color: '#FFFF' },
  descriptionDate: {
    fontSize: 14,
    color: "#F5F5F5"
  }

})