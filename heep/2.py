# https://programmers.co.kr/learn/courses/30/lessons/42629
# 현재 공장에 남아있는 밀가루 수량 stock
# 밀가루 공급 일정(dates)
# 해당 시점에 공급 가능한 밀가루 수량(supplies)
# 원래 공장으로부터 공급받을 수 있는 시점 k
# 밀가루가 떨어지지 않고 공장을 운영하기 위해서 최소한 몇 번 해외 공장으로부터 밀가루를 공급받아야 하는지

def solution(stock, dates, supplies, k):
    for i in range(len(dates)) : 
        stock += supplies[i]
        if stock >= k-1 : return i + 1

print(solution(4,[4,10,15],[20,5,10],30))