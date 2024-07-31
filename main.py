'''
1. Acessar o site http://www.trivago.com.br
2. Digitar o valor “Manaus” no campo de busca
3. Clicar no botão "Pesquisar" Selecionar a opção Ordenar por “Avaliação e
Sugestões"
4. Verifique o nome do primeiro da lista
5. Verifique a avaliação do primeiro da lista
6. Verifique o valor do primeiro da lista


'''

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()


def busca(local):
    driver.get("http://www.trivago.com.br")
    driver.maximize_window()

    search_btn = driver.find_element(
        By.XPATH, '//*[@id="input-auto-complete"]')
    search_btn.click()
    search_btn.send_keys(local)
    time.sleep(3)
    search_btn.send_keys(Keys.ENTER)

    time.sleep(1)

    select_search = driver.find_element(
        By.XPATH, '//*[@id="__next"]/div[1]/div[2]/section[1]/div[2]/div[4]/div/button')
    select_search.click()


def order():
    time.sleep(7)
    select_order = driver.find_element(
        By.XPATH, '//*[@id="sorting-selector"]')
    select_order.click()
    select_order_op2 = driver.find_element(
        By.XPATH, '//*[@id="sorting-selector"]/option[2]')
    select_order_op2.click()


def captura_dados():
    time.sleep(10)
    valor_local = driver.find_element(
        By.XPATH, '//*[@id="__next"]/div/main/div[3]/div[1]/div[1]/div[3]/div/div/ol/li[1]/div/article/div[3]/div/div[1]/span').text
    nome_local = driver.find_element(
        By.XPATH, '//*[@id="__next"]/div/main/div[3]/div[1]/div[1]/div[3]/div/div/ol/li[1]/div/article/div[2]/section/h2/button/span')
    nome_local.click()
    avaliacao = driver.find_element(
        By.XPATH, '//*[@id="tab-list-REVIEW"]/span')
    avaliacao.click()
    primeira_avaliacao = driver.find_element(
        By.XPATH, '//*[@id="tab-content-REVIEW"]/div/div/div/section/div[2]/div/blockquote').text

    print(f'Nome do hotel: {nome_local}')
    print(f'Valor: {valor_local}')
    print(f'Primeira avaliação: {primeira_avaliacao}')


if __name__ == '__main__':
    local = 'manaus'
    busca(local)

    print(f"==== Dados Recolhidos de {local} ====")

    order()
    captura_dados()
